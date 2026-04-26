// รวมชุดข้อสอบทั้งหมด
const ALL_EXAM_SETS = [examSet1, examSet2, examSet3, examSet4, examSet5];
const ALL_ELEC_SETS = [elecSet1, elecSet2, elecSet3, elecSet4, elecSet5];
const PASS_SCORE = 35;
const TOTAL_QUESTIONS = 50;
const EXAM_TIME_MINUTES = 60; // 60 นาที

// ====== สาขาวิชา ======
const BRANCHES = [
  { id: 'plc',  title: 'สาขาช่างควบคุมด้วยระบบโปรแกรมเมเบิ้ลลอจิกคอนโทรลเลอร์', level: 'ระดับ 1', icon: '⚡' },
  { id: 'elec', title: 'สาขาช่างไฟฟ้าภายในอาคาร', level: 'ระดับ 1', icon: '🔌' },
];

// built-in sets ทั้งหมดอยู่ใน branch 'plc'
function getBuiltinBranch(setId) { return 'plc'; }

function getExamSetsByBranch(branchId) {
  const builtin = branchId === 'plc' ? ALL_EXAM_SETS : branchId === 'elec' ? ALL_ELEC_SETS : [];
  const custom = getCustomSets().filter(s => (s.branch || 'plc') === branchId);
  return [...builtin, ...custom];
}
function getSetBranch(set) {
  if (ALL_EXAM_SETS.find(s => s.id == set.id)) return 'plc';
  if (ALL_ELEC_SETS.find(s => s.id == set.id)) return 'elec';
  return set.branch || 'plc';
}

// ====== สัดส่วนเนื้อหาข้อสอบ (รวม 50 ข้อ) ======
// หลักการควบคุม 20% | อุปกรณ์ PLC 16% | การเขียนโปรแกรม 28% |
// การเดินสาย 20% | บำรุงรักษา+ความปลอดภัย 16%
const TOPIC_DISTRIBUTION = [
  { label: 'หลักการควบคุม + วงจรลอจิก',       poolFn: () => examSet1.questions, count: 10 },
  { label: 'อุปกรณ์ PLC + การเชื่อมต่อ',       poolFn: () => examSet2.questions, count: 8  },
  { label: 'การเขียนโปรแกรม',                  poolFn: () => examSet3.questions, count: 14 },
  { label: 'การเดินสาย + ประกอบอุปกรณ์',       poolFn: () => examSet4.questions, count: 10 },
  { label: 'การบำรุงรักษา + ความปลอดภัย',      poolFn: () => examSet5.questions, count: 8  },
];

// สร้างชุดข้อสอบผสมจากทุกหัวข้อตามสัดส่วน
function buildMixedExam() {
  const selected = [];
  TOPIC_DISTRIBUTION.forEach(({ poolFn, count }) => {
    const shuffled = shuffleArray(poolFn());
    selected.push(...shuffled.slice(0, count));
  });
  return shuffleArray(selected);
}

// ====== Auth Helpers ======
function getUsers() {
  const data = JSON.parse(localStorage.getItem('plc_users') || '[]');
  // Firebase RTDB REST API อาจคืนเป็น object {"0":{...}, "1":{...}} แทน array
  if (Array.isArray(data)) return data;
  if (data && typeof data === 'object') return Object.values(data);
  return [];
}
function saveUsers(users) {
  localStorage.setItem('plc_users', JSON.stringify(users));
  // เก็บ Firebase เป็น object {id: userData} ไม่ใช่ array — กันปัญหา Firebase แปลง array เป็น object
  const obj = {};
  users.forEach(u => { if (u && u.id) obj[u.id] = u; });
  fbWrite('plc_users', obj);
}
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('plc_current_user') || 'null');
}
function setCurrentUser(user) {
  sessionStorage.setItem('plc_current_user', JSON.stringify(user));
}
function logout() {
  sessionStorage.removeItem('plc_current_user');
  window.location.href = 'index.html';
}
function requireAuth() {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'index.html'; return null; }
  return user;
}

// ====== History Helpers ======
function getHistory(userId) {
  const all = JSON.parse(localStorage.getItem('plc_history') || '{}');
  return all[userId] || [];
}
function saveResult(userId, result) {
  const all = JSON.parse(localStorage.getItem('plc_history') || '{}');
  if (!all[userId]) all[userId] = [];
  all[userId].unshift(result);
  localStorage.setItem('plc_history', JSON.stringify(all));
  // เขียนเฉพาะ history ของ user นี้ไป Firebase (ป้องกัน race condition)
  fbWrite('plc_history/' + userId, all[userId]);
}

// ====== Default Demo Users ======
// (Removed for security - system now strictly relies on DB or LocalStorage)


// ====== Shuffle array ======
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ====== Format Date ======
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ====== Format Time ======
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ====== Custom Exam Sets ======
function getCustomSets() {
  return JSON.parse(localStorage.getItem('plc_custom_sets') || '[]');
}
function saveCustomSets(sets) {
  localStorage.setItem('plc_custom_sets', JSON.stringify(sets));
  fbSyncKey('plc_custom_sets');
}
function getAllExamSets() {
  return [...ALL_EXAM_SETS, ...ALL_ELEC_SETS, ...getCustomSets()];
}

// ====== Per-Set Settings Override (time / passScore) ======
function getSetSettings(setId) {
  const all = JSON.parse(localStorage.getItem('plc_set_settings') || '{}');
  return all[String(setId)] || null;
}
function saveSetSettings(setId, settings) {
  const all = JSON.parse(localStorage.getItem('plc_set_settings') || '{}');
  all[String(setId)] = settings;
  localStorage.setItem('plc_set_settings', JSON.stringify(all));
  fbSyncKey('plc_set_settings');
}

// ====== Admin Auth ======
function isAdmin(user) {
  return user && (user.role === 'admin' || user.studentId === 'admin');
}
function requireAdmin() {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'index.html'; return null; }
  if (!isAdmin(user)) { window.location.href = 'dashboard.html'; return null; }
  return user;
}

// ====== Image Compression (canvas) ======
function compressImage(dataUrl, callback) {
  const img = new Image();
  img.onload = function () {
    const MAX = 800;
    let w = img.width, h = img.height;
    if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
    if (h > MAX) { w = Math.round(w * MAX / h); h = MAX; }
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
    callback(canvas.toDataURL('image/jpeg', 0.75));
  };
  img.src = dataUrl;
}

// ====== Firebase Realtime Database Sync ======
const _FB_DEFAULT_URL = 'https://mentra-plcskillstest-default-rtdb.asia-southeast1.firebasedatabase.app';

function fbGetUrl() {
  return (localStorage.getItem('plc_firebase_url') || _FB_DEFAULT_URL).replace(/\/$/, '');
}

async function fbRead(path) {
  const url = fbGetUrl();
  if (!url) return null;
  try {
    const ctrl = new AbortController();
    const tid = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(`${url}/${path}.json`, { signal: ctrl.signal });
    clearTimeout(tid);
    if (!res.ok) return null;
    return await res.json();
  } catch(e) { return null; }
}

async function fbWrite(path, data) {
  const url = fbGetUrl();
  if (!url) return;
  try {
    const ctrl = new AbortController();
    const tid = setTimeout(() => ctrl.abort(), 4000);
    await fetch(`${url}/${path}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: ctrl.signal
    });
    clearTimeout(tid);
  } catch(e) { /* silent */ }
}

// sync เฉพาะ plc_users จาก Firebase (เร็ว ใช้ก่อน login/register)
async function syncUsersFromFirebase() {
  const data = await fbRead('plc_users');
  console.log('[DEBUG] plc_users from Firebase:', JSON.stringify(data));
  let arr = [];
  if (data !== null) {
    arr = Array.isArray(data) ? data : Object.values(data);
    arr = arr.filter(Boolean);
    console.log('[DEBUG] users after normalize:', arr.map(u => u.studentId));
    const OLD_DEMO_IDS = ['6601001', '6601002'];
    arr = arr.filter(u => !OLD_DEMO_IDS.includes(String(u.studentId)));
  } else {
    console.log('[DEBUG] Firebase returned null, using localStorage');
    const local = JSON.parse(localStorage.getItem('plc_users') || '[]');
    arr = Array.isArray(local) ? local : Object.values(local);
    arr = arr.filter(Boolean);
  }
  console.log('[DEBUG] final users in localStorage:', arr.map(u => u.studentId));
  localStorage.setItem('plc_users', JSON.stringify(arr));
}

// ดึงข้อมูลทุก key จาก Firebase มาอัปเดต localStorage
async function syncAllFromFirebase() {
  const url = fbGetUrl();
  if (!url) return;
  try {
    const keys = ['plc_users', 'plc_history', 'plc_custom_sets', 'plc_set_settings', 'plc_draft_sets', 'plc_reports'];
    const results = await Promise.all(keys.map(k => fbRead(k).then(d => [k, d])));
    results.forEach(([key, data]) => {
      if (data === null) return;
      // plc_history: merge กับ local แทนที่จะเขียนทับ — ป้องกัน race condition หลังส่งข้อสอบ
      if (key === 'plc_history' && data && typeof data === 'object') {
        const local = JSON.parse(localStorage.getItem('plc_history') || '{}');
        const merged = {};
        // เริ่มจาก Firebase
        Object.keys(data).forEach(uid => { merged[uid] = Array.isArray(data[uid]) ? data[uid] : []; });
        // ถ้า local มีข้อมูลมากกว่า (เพิ่งส่งข้อสอบยังไม่ sync ขึ้น Firebase) → เก็บ local
        Object.keys(local).forEach(uid => {
          const localArr = Array.isArray(local[uid]) ? local[uid] : [];
          const remoteArr = Array.isArray(merged[uid]) ? merged[uid] : [];
          if (localArr.length > remoteArr.length) merged[uid] = localArr;
        });
        localStorage.setItem(key, JSON.stringify(merged));
        return;
      }
      const ARRAY_KEYS = ['plc_users', 'plc_custom_sets', 'plc_draft_sets', 'plc_reports'];
      const normalized = (ARRAY_KEYS.includes(key) && !Array.isArray(data) && typeof data === 'object')
        ? Object.values(data).filter(Boolean)
        : data;
      localStorage.setItem(key, JSON.stringify(normalized));
    });
    // หลัง sync ให้ syncUsersFromFirebase ใส่ admin/guest กลับ (ป้องกันหายหลัง overwrite)
    await syncUsersFromFirebase();
  } catch(e) { /* silent */ }
}

// push localStorage key เดียวขึ้น Firebase (fire-and-forget)
function fbSyncKey(key) {
  const url = fbGetUrl();
  if (!url) return;
  const data = localStorage.getItem(key);
  if (data !== null) fbWrite(key, JSON.parse(data));
}

// ====== Issue Reports ======
function getReports() {
  return JSON.parse(localStorage.getItem('plc_reports') || '[]');
}
function getLocalReports() {
  return getReports();
}
function saveReports(reports) {
  localStorage.setItem('plc_reports', JSON.stringify(reports));
  fbSyncKey('plc_reports');
}

// ====== Flatten all history into single array with user info ======
function getAllHistoryArray() {
  const allHist = JSON.parse(localStorage.getItem('plc_history') || '{}');
  const users = getUsers();
  const flat = [];
  Object.keys(allHist).forEach(uid => {
    const arr = Array.isArray(allHist[uid]) ? allHist[uid] : [];
    const u = users.find(x => x.id === uid);
    arr.forEach((h, idx) => {
      flat.push({
        ...h,
        userId: uid,
        userName: u ? u.name : (h.userName || 'ไม่ระบุ'),
        userStudentId: u ? u.studentId : (h.userStudentId || '-'),
        id: h.id || `${uid}_${idx}`
      });
    });
  });
  return flat;
}

// ===== Global UI Utilities =====
function showLoading(title = 'กำลังดำเนินการ...', text = 'กรุณารอสักครู่') {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: title,
      html: text,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }
}

function hideLoading() {
  if (typeof Swal !== 'undefined') {
    Swal.close();
  }
}

// ====== Answer Review Setting (Admin-controlled) ======
function getReviewSetting() {
  return JSON.parse(localStorage.getItem('plc_allow_review') || 'false');
}
function setReviewSetting(val) {
  localStorage.setItem('plc_allow_review', JSON.stringify(val));
  fbWrite('plc_allow_review', val);
}

// ====== AI Chat (Gemini API Key) ======
function getGeminiApiKey() {
  return 'AIzaSyD2GMAxdH0xzTBxisQTs3S36OH1fV3NmAY';
}
