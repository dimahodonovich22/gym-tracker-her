// Training program — Mike Boreyko (girlfriend's program)
// Heavy block: 5 weeks, 3 training days per week (15 days total).
// Light block (deload): 1 upper + 1 lower (2 days total).
// Rest days are not part of the rotation — the app advances day-by-day through training entries only.

const VIDEOS = {
  // Спина / Грудь
  "Жим штанги в наклоне": "https://www.youtube.com/shorts/NH12NRdxyDg",
  "Жим в Смите в наклоне": "https://www.youtube.com/shorts/UA2uuAElBcE",
  "Жим гантелей в наклоне": "https://www.youtube.com/shorts/CAXdA9iEXco",
  "Жим штанги лежа": "https://www.youtube.com/shorts/7nElIaNfJCU",
  "Жим лежа в Смите": "https://www.youtube.com/shorts/EKORkfmdgoQ",
  "Жим гантелей лежа": "https://www.youtube.com/shorts/RF_Z4an3FTM",
  "Отжимания на брусьях с акцентом на грудь": "https://www.youtube.com/shorts/34L6fAj63Ds",
  "Жим в Хаммере на верх груди": "https://www.youtube.com/shorts/_pbCAfy8vDM",
  "Жим в Хаммере на низ груди": "https://www.youtube.com/shorts/ppVWVWaijPw",
  "Подтягивания широким хватом": "https://www.youtube.com/shorts/0lMFlH3TyaI",
  "Подтягивания параллельным хватом": "https://www.youtube.com/shorts/JZei52P5SbE",
  "Подтягивания обратным хватом": "https://www.youtube.com/shorts/JZei52P5SbE",
  "Вертикальная тяга блока широким хватом": "https://www.youtube.com/shorts/WVtkxdAoDqs",
  "Вертикальная тяга блока параллельным хватом": "https://www.youtube.com/shorts/JtiAnzniARA",
  "Вертикальная тяга блока узким хватом": "https://www.youtube.com/shorts/qxAjVptyK-4",
  "Тяга верхнего блока с упором в скамью": "https://www.youtube.com/shorts/0ayoTx-q6mc",
  "Тяга верхнего блока по 1-й руке с упором в скамью": "https://www.youtube.com/shorts/ATERaZ-MDk0",
  "Тяга верхних блоков с упором в скамью": "https://www.youtube.com/shorts/2rWKSc19bYk",
  "Тяга верхних блоков в кроссовере на коленях": "https://www.youtube.com/shorts/EclcGrTRNAc",
  "Рычажная верхняя тяга": "https://www.youtube.com/shorts/-tSB3bB2dl0",
  "Горизонтальная тяга блока с акцентом на ширину": "https://www.youtube.com/shorts/1iU65ToLyB0",
  "Горизонтальная тяга блока с акцентом на толщину": "https://www.youtube.com/shorts/AAcBr0poYEY",
  "Горизонтальная тяга блока по 1-й руке": "https://www.youtube.com/shorts/ANLNqnvtn5I",
  "Тяга нижнего блока с упором в скамью": "https://www.youtube.com/shorts/r0d0RCR5hJ4",
  "Тяга нижнего блока по 1-й руке с упором в скамью": "https://www.youtube.com/shorts/Qkm4RoaoJ1A",
  "Тяга нижнего блока по 1-й руке": "https://www.youtube.com/shorts/xP_dvuHGDfM",
  "Тяга нижнего блока стоя": "https://www.youtube.com/shorts/IGOY3J1sxG0",
  "Рычажная горизонтальная тяга двумя руками": "https://www.youtube.com/shorts/esW6qhI3q9w",
  "Рычажная горизонтальная тяга по 1-й руке": "https://www.youtube.com/shorts/Oj_F4Cg5UVo",
  "Тяга к поясу в тренажере сидя": "https://www.youtube.com/shorts/C7cA9PeiRlM",
  "Тяга штанги в наклоне": "https://www.youtube.com/shorts/MnvrQP1rE8o",
  "Тяга к поясу в Смите": "https://www.youtube.com/shorts/MnvrQP1rE8o",
  "Тяга двух гантелей в наклоне": "https://www.youtube.com/shorts/0KMy9im_F54",
  "Тяга гантелей в наклоне по 1-й руке": "https://www.youtube.com/shorts/aAPFWsr84hA",
  "Тяга грифа по 1-й руке": "https://www.youtube.com/shorts/Dewb52CdftI",
  "Тяга гантелей с упором в скамью": "https://www.youtube.com/shorts/J_qqm8yZFBM",
  "Тяга Т-грифа": "https://www.youtube.com/shorts/0cAZ3zUn37Q",
  "Тяга Т-грифа без Т-грифа": "https://www.youtube.com/shorts/0cAZ3zUn37Q",
  "Пулловер в блоке": "https://www.youtube.com/shorts/5HY5FXOUIWk",
  "Пулловер в блоке с упором спиной": "https://www.youtube.com/watch?v=DiO10H1UTZU",
  "Шраги со свободным весом/в блоке": "https://www.youtube.com/shorts/TRHrJiqu_3A",
  "Гиперэкстензия": "https://www.youtube.com/shorts/T8D6lS13hdw",
  "Экстензия на полу": "https://www.youtube.com/shorts/dk9UewhG244",
  "Жим вниз в тренажере": "https://www.youtube.com/shorts/9dKyUjkgocI",
  "Сведение в Peck-Deck на верх груди": "https://www.youtube.com/shorts/Jdj_asaMtvM",
  "Сведение в Peck-Deck на низ груди": "https://www.youtube.com/shorts/Jdj_asaMtvM",
  "Сведение в кроссовере стоя": "https://www.youtube.com/shorts/5bBYLCo_lKU",
  "Сведение в кроссовере лежа на наклонной скамье": "https://www.youtube.com/shorts/xODrGtfCD-M",
  "Сведение гантелей лежа": "https://www.youtube.com/shorts/ek9hoBP3Knw",
  "Пуловер с гантелью на грудь": "https://www.youtube.com/shorts/fnIR3mVGsuU",

  // Ноги, ягодицы, икры
  "Приседания со штангой": "https://www.youtube.com/shorts/OZIvM5RfwSw",
  "Приседания в Смите": "https://www.youtube.com/shorts/4SAL2nh4e2g",
  "Приседания в Смите с узкой постановкой ног": "https://www.youtube.com/shorts/ORBL1vvk6_I",
  "Приседания в Смите с акцентом на ягодицы": "https://www.youtube.com/shorts/QPzQBMmmQ4A",
  "Приседания в Гакке": "https://www.youtube.com/shorts/bmXRE774bvY",
  "Обратные приседания в Гакке": "https://www.youtube.com/shorts/pw0wOg3UTQA",
  "Фронтальный присед": "https://www.youtube.com/shorts/hT4Sg2IqQG8",
  "Приседания с гантелью на груди": "https://www.youtube.com/shorts/HBq-zmYZdHA",
  "Приседания плие с гантелью": "https://www.youtube.com/shorts/08rv9RYXUs8",
  "Приседания с нижним блоком": "https://www.youtube.com/shorts/Kjab8QvtBvs",
  "Выпады с гантелями/штангой": "https://www.youtube.com/shorts/ukabBzBGVO0",
  "Выпады в Смите с акцентом на ягодицы": "https://www.youtube.com/shorts/rdjBB7uIf14",
  "Выпады с гантелями с акцентом на ягодицы": "https://www.youtube.com/shorts/Y8AdVQdFRwU",
  "Болгарские выпады в Смите": "https://www.youtube.com/shorts/OIQxgDawirk",
  "Болгарские выпады": "https://www.youtube.com/shorts/4FOZLx9Gxbs",
  "Болгарские выпады с гантелями": "https://www.youtube.com/shorts/4FOZLx9Gxbs",
  "Жим ногами": "https://www.youtube.com/shorts/pdmAAyqaJos",
  "Жим ногами с акцентом на ягодицы": "https://www.youtube.com/shorts/lhyzNK9gPsU",
  "Разгибания ног в тренажере": "https://www.youtube.com/shorts/U8ZffkVs9dw",
  "Сгибания ног лежа в тренажере на бицепс бедра": "https://www.youtube.com/shorts/q3S7FYIehQU",
  "Сгибания ног на бицепс бедра в тренажере стоя по 1-й ноге": "https://www.youtube.com/shorts/07k0M54QF1c",
  "Сгибания ног с гантелью на бицепс бедра": "https://www.youtube.com/shorts/jOfM3d2otQA",
  "Мертвая тяга": "https://www.youtube.com/shorts/lmfltWWJDpM",
  "Румынская тяга": "https://www.youtube.com/shorts/F7VMXRuSGNg",
  "Румынская тяга по 1-й ноге": "https://www.youtube.com/shorts/ug4I21Z_aK0",
  "Ягодичный мостик": "https://www.youtube.com/shorts/BNWY9PunWR0",
  "Отведение ноги в кроссовере": "https://www.youtube.com/shorts/qF387vn2qCA",
  "Сведения ног в тренажере": "https://www.youtube.com/shorts/kMTTXPK0L8A",
  "Разведения ног в тренажере": "https://www.youtube.com/shorts/h9qlAX_DaZI",
  "Экстензия с акцентом на ягодицы": "https://www.youtube.com/shorts/tPMi3GX22Nw",
  "Тяга в Смите на ягодицы": "https://www.youtube.com/shorts/pHnJ5iTvPbk",
  "Тяга нижнего блока на ягодицы": "https://www.youtube.com/shorts/UgHlvB1GJLM",
  "Подъемы на носки в тренажере сидя": "https://www.youtube.com/shorts/2DAHyNcTtGA",
  "Подъемы на носки в тренажере стоя/в Смите": "https://www.youtube.com/shorts/ZBWBiCu_xJE",
  "Подъемы на носки по 1-й ноге с гантелью": "https://www.youtube.com/shorts/KI8xtZRdfjk",

  // Плечи, бицепс, трицепс
  "Жим штанги/в Смите узким хватом": "https://www.youtube.com/shorts/K6nOH2OLHOs",
  "Отжимания на брусьях с акцентом на трицепс": "https://www.youtube.com/shorts/IpdJQhixUfs",
  "Жим вниз в тренажере с акцентом на трицепс": "https://www.youtube.com/shorts/AFs4YjoyI7o",
  "Жим в Смите сидя": "https://www.youtube.com/shorts/nH1yqCId97c",
  "Жим гантелей сидя": "https://www.youtube.com/shorts/_Hng2oWkj3w",
  "Жим в тренажере сидя/в Хаммере на плечи": "https://www.youtube.com/shorts/zI5KNfRrnuA",
  "Подъемы рук перед собой": "https://www.youtube.com/shorts/bajgzWnsYds",
  "Подъемы рук с канатом перед собой": "https://www.youtube.com/shorts/q6-z5Ogd7dM",
  "Протяжка со штангой": "https://www.youtube.com/shorts/_ttmgA5x1z4",
  "Протяжка с нижнего блока": "https://www.youtube.com/shorts/7TVpuq6Stkg",
  "Протяжка с гантелями": "https://www.youtube.com/shorts/kz1jcTSCM7c",
  "Отведение гантелей в стороны стоя": "https://www.youtube.com/shorts/sae4gLqTFEs",
  "Отведение гантелей с упором в скамью": "https://www.youtube.com/shorts/nMz2V_3WCZs",
  "Отведение рук в тренажере сидя": "https://www.youtube.com/shorts/t6S51ab8Lkw",
  "Отведение в кроссовере по 1-й руке": "https://www.youtube.com/shorts/9fF7OUuzjMM",
  "Отведение рук в кроссовере лежа": "https://www.youtube.com/shorts/HgkIGr6nMVA",
  "Разведение на заднюю дельту в Peck-Deck": "https://www.youtube.com/shorts/SpeJD8WSRP0",
  "Разведение гантелей сидя в наклоне": "https://www.youtube.com/shorts/t-ul2Wr9IKU",
  "Разведение гантелей с упором в скамью (задняя дельта)": "https://www.youtube.com/shorts/dOrZ_MHKUBo",
  "Тяга каната на заднюю дельту": "https://www.youtube.com/shorts/kB9s5rFOlxQ",
  "Разведение рук на заднюю дельту в кроссовере": "https://www.youtube.com/shorts/OahstM_1UAg",
  "Тяга гантели по 1-й руке на заднюю дельту": "https://www.youtube.com/shorts/g02vz5gj7bI",
  "Подъем штанги на бицепс": "https://www.youtube.com/shorts/_8l82_jZl3Y",
  "Подъем гантелей на бицепс": "https://www.youtube.com/shorts/Yl4kLrhzj6Q",
  "Подъем гантелей на бицепс сидя": "https://www.youtube.com/shorts/cACziKO2DFw",
  "Подъем штанги на бицепс с коленей": "https://www.youtube.com/shorts/UnMG1PcEqTQ",
  "Сгибания рук с нижнего блока": "https://www.youtube.com/shorts/-k_vFGb4Lbw",
  "Сгибания рук в тренажере Скотта": "https://www.youtube.com/shorts/J_VVlkVzH38",
  "Подъем штанги на бицепс на скамье Скотта": "https://www.youtube.com/shorts/nfRy-fisB2o",
  "Сгибания по 1-й руке с гантелью с упором руки в скамью": "https://www.youtube.com/shorts/xdJnGqpKfMw",
  "Подъем гантелей с упором в скамью": "https://www.youtube.com/shorts/IUYZ_XBO36g",
  "Подъем штанги с упором в скамью": "https://www.youtube.com/shorts/JbRsHIJZyNI",
  "Подъем гантелей на бицепс сидя на наклонной скамье": "https://www.youtube.com/shorts/bmMpgxzJhWE",
  "Подъем гантелей на бицепс сидя с упором сзади": "https://www.youtube.com/shorts/dVA5dXzBH68",
  "Сгибания по 1-й руке нижнего блока сзади": "https://www.youtube.com/shorts/_RMCVek_hus",
  "Сгибания по 1-й руке с нижнего блока с упором в скамью": "https://www.youtube.com/shorts/-Fvkc0r7LgE",
  "Подъем штанги верхним хватом": "https://www.youtube.com/shorts/_GV_sYdgXLw",
  "Молотки с гантелями": "https://www.youtube.com/shorts/Q1ROrn-Nuso",
  "Молотки с канатом": "https://www.youtube.com/shorts/ozHyAhP8ZFs",
  "Молотки с гантелями сидя": "https://www.youtube.com/shorts/Tj6ZbH0CDz4",
  "Сгибания кистей со штангой на скамье": "https://www.youtube.com/shorts/ZXwYGSgWxsw",
  "Сгибания кистей со штангой сзади": "https://www.youtube.com/shorts/URkKSRENzUo",
  "Разгибания в блоке с прямой рукоятью": "https://www.youtube.com/shorts/ZJDVfLJms2s",
  "Разгибания в блоке с канатом/двумя канатами": "https://www.youtube.com/shorts/pp5VoBwsTU8",
  "Разгибания в блоке лежа на скамье": "https://www.youtube.com/shorts/HgKy9Pr2EvU",
  "Разгибания в блоке по 1-й руке": "https://www.youtube.com/shorts/WdGzJ-lZVMg",
  "Разгибания с двух блоков в кроссовере": "https://www.youtube.com/shorts/wsVLiMiy8Qs",
  "Французский жим на наклонной скамье": "https://www.youtube.com/shorts/kqV-KmVnYfo",
  "Французский жим с гантелями на наклонной скамье": "https://www.youtube.com/shorts/Hgk4L6s0l5Q",
  "Разгибания из-за головы в блоке": "https://www.youtube.com/shorts/w3tzPoxhKQE",
  "Разгибания из-за головы в блоке по 1-й руке": "https://www.youtube.com/shorts/HObNZxHcfXM",
  "Разгибания с гантелью из-за головы по 1-й руке": "https://www.youtube.com/shorts/xl6S_IhFCb4",
  "Разгибания из-за головы одной гантелью двумя руками": "https://www.youtube.com/shorts/U_OQ0eHBFXk",
  "Разгибания рук с гантелями стоя в наклоне": "https://www.youtube.com/shorts/4TA7lN5XX80",
  "Отжимания с упором сзади": "https://www.youtube.com/shorts/YXfUibfbUA4",

  // Пресс / Разминка
  "Молитва в блоке": "https://www.youtube.com/shorts/TftUxOBcE1o",
  "Подъемы ног в висе": "https://www.youtube.com/shorts/smyfMQh-Rms",
  "Разминка верха тела": "https://www.youtube.com/shorts/NgP5ePNPF8I",
  "Разминка низа тела": "https://www.youtube.com/shorts/syQ_R_G6sX8",
};

// Muscle classification: { primary: specific muscle, group: broad muscle group }
// Used by "Заменить упражнение" to order candidates by relevance.
const MUSCLES = {
  // Спина
  "Вертикальная тяга блока широким хватом": { primary: "lats", group: "back" },
  "Вертикальная тяга блока параллельным хватом": { primary: "lats", group: "back" },
  "Пулловер в блоке": { primary: "lats", group: "back" },
  "Тяга к поясу в тренажере сидя": { primary: "mid-back", group: "back" },
  "Рычажная горизонтальная тяга по 1-й руке": { primary: "mid-back", group: "back" },
  "Тяга нижнего блока стоя": { primary: "mid-back", group: "back" },
  "Тяга нижнего блока с упором в скамью": { primary: "mid-back", group: "back" },
  "Мертвая тяга": { primary: "lower-back", group: "back" },

  // Грудь
  "Жим в Хаммере на верх груди": { primary: "chest-upper", group: "chest" },
  "Сведение в Peck-Deck на низ груди": { primary: "chest-lower", group: "chest" },

  // Ноги — квадрицепс / общий объем
  "Приседания в Смите с акцентом на ягодицы": { primary: "quads", group: "legs" },
  "Жим ногами с акцентом на ягодицы": { primary: "quads", group: "legs" },
  "Болгарские выпады": { primary: "quads", group: "legs" },
  "Выпады с гантелями с акцентом на ягодицы": { primary: "quads", group: "legs" },
  "Приседания с нижним блоком": { primary: "quads", group: "legs" },
  "Приседания плие с гантелью": { primary: "quads", group: "legs" },

  // Ноги — бицепс бедра
  "Сгибания ног лежа в тренажере на бицепс бедра": { primary: "hamstrings", group: "legs" },
  "Румынская тяга по 1-й ноге": { primary: "hamstrings", group: "legs" },

  // Ноги — ягодицы
  "Ягодичный мостик": { primary: "glutes", group: "legs" },
  "Экстензия с акцентом на ягодицы": { primary: "glutes", group: "legs" },
  "Тяга нижнего блока на ягодицы": { primary: "glutes", group: "legs" },
  "Отведение ноги в кроссовере": { primary: "glutes", group: "legs" },
  "Разведения ног в тренажере": { primary: "glutes", group: "legs" },

  // Плечи
  "Отведение гантелей в стороны стоя": { primary: "side-delts", group: "shoulders" },
  "Жим гантелей сидя": { primary: "front-delts", group: "shoulders" },
  "Жим в тренажере сидя/в Хаммере на плечи": { primary: "front-delts", group: "shoulders" },

  // Бицепс
  "Подъем штанги на бицепс": { primary: "biceps", group: "biceps" },
  "Подъем гантелей на бицепс": { primary: "biceps", group: "biceps" },
  "Сгибания рук с нижнего блока": { primary: "biceps", group: "biceps" },
  "Молитва в блоке": { primary: "biceps", group: "biceps" },
  "Молотки с гантелями": { primary: "brachialis", group: "biceps" },

  // Трицепс
  "Разгибания в блоке с прямой рукоятью": { primary: "triceps-pushdown", group: "triceps" },
  "Разгибания в блоке с канатом/двумя канатами": { primary: "triceps-pushdown", group: "triceps" },

  // Пресс
  "Подъемы ног в висе": { primary: "abs", group: "abs" },

  // Кардио
  "КАРДИО": { primary: "cardio", group: "cardio" },
};

function ex(name, warmup, scheme, rest, rir) {
  return { name, warmup, scheme, rest, rir, video: VIDEOS[name] || null };
}

const PROGRAM = [
  // ============ ТЯЖЕЛЫЙ БЛОК — НЕДЕЛЯ 1 ============
  {
    name: "День 1 — Низ",
    block: "Тяжелый блок (неделя 1)",
    exercises: [
      ex("Приседания в Смите с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×10-12", "2 мин", "1"),
      ex("Ягодичный мостик", false, "3×12-15", "2 мин", "1"),
      ex("Румынская тяга по 1-й ноге", false, "2×10-12", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "1×Дропсет", "—", "0"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },
  {
    name: "День 3 — Верх",
    block: "Тяжелый блок (неделя 1)",
    exercises: [
      ex("Вертикальная тяга блока параллельным хватом", true, "3×10-12", "2 мин", "1"),
      ex("Жим в Хаммере на верх груди", true, "3×10-12", "2 мин", "1"),
      ex("Рычажная горизонтальная тяга по 1-й руке", false, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", true, "4×12-15", "1 мин", "1"),
      ex("Разгибания в блоке с прямой рукоятью", true, "2×12-15", "2 мин", "1"),
      ex("Подъем гантелей на бицепс", true, "3×10-12", "2 мин", "1"),
      ex("Подъемы ног в висе", false, "3×15", "1 мин", "1"),
    ],
  },
  {
    name: "День 5 — Низ",
    block: "Тяжелый блок (неделя 1)",
    exercises: [
      ex("Экстензия с акцентом на ягодицы", true, "3×12", "1 мин", "3"),
      ex("Болгарские выпады", true, "3×10-12", "3 мин", "1"),
      ex("Тяга нижнего блока на ягодицы", true, "3×10-12", "2 мин", "1"),
      ex("Отведение ноги в кроссовере", false, "3×15", "1,30 мин", "1"),
      ex("Разведения ног в тренажере", false, "2×12-15", "2 мин", "1"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },

  // ============ ТЯЖЕЛЫЙ БЛОК — НЕДЕЛЯ 2 ============
  {
    name: "День 8 — Низ",
    block: "Тяжелый блок (неделя 2)",
    exercises: [
      ex("Жим ногами с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Ягодичный мостик", false, "3×8-10", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×12-15", "2 мин", "1"),
      ex("Отведение ноги в кроссовере", true, "2×10-12", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "3×10-12", "2 мин", "1"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },
  {
    name: "День 10 — Верх",
    block: "Тяжелый блок (неделя 2)",
    exercises: [
      ex("Тяга к поясу в тренажере сидя", true, "3×12-15", "2 мин", "1"),
      ex("Пулловер в блоке", false, "3×12-15", "2 мин", "1"),
      ex("Вертикальная тяга блока широким хватом", false, "2×10-12", "2 мин", "1"),
      ex("Жим гантелей сидя", true, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", false, "1×Дропсет", "—", "0"),
      ex("Сгибания рук с нижнего блока", false, "2×15", "1,30 мин", "1"),
      ex("Разгибания в блоке с канатом/двумя канатами", false, "2×15", "1,30 мин", "1"),
      ex("Молитва в блоке", false, "3×15", "1 мин", "1"),
    ],
  },
  {
    name: "День 12 — Низ",
    block: "Тяжелый блок (неделя 2)",
    exercises: [
      ex("Приседания в Смите с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×10-12", "2 мин", "1"),
      ex("Ягодичный мостик", false, "3×12-15", "2 мин", "1"),
      ex("Румынская тяга по 1-й ноге", false, "2×10-12", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "1×Дропсет", "—", "0"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },

  // ============ ТЯЖЕЛЫЙ БЛОК — НЕДЕЛЯ 3 ============
  {
    name: "День 15 — Верх",
    block: "Тяжелый блок (неделя 3)",
    exercises: [
      ex("Вертикальная тяга блока параллельным хватом", true, "3×10-12", "2 мин", "1"),
      ex("Жим в Хаммере на верх груди", true, "3×10-12", "2 мин", "1"),
      ex("Рычажная горизонтальная тяга по 1-й руке", false, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", true, "4×12-15", "1 мин", "1"),
      ex("Разгибания в блоке с прямой рукоятью", true, "2×12-15", "2 мин", "1"),
      ex("Подъем гантелей на бицепс", true, "3×10-12", "2 мин", "1"),
      ex("Подъемы ног в висе", false, "3×15", "1 мин", "1"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },
  {
    name: "День 17 — Низ",
    block: "Тяжелый блок (неделя 3)",
    exercises: [
      ex("Ягодичный мостик", true, "3×8-10", "2 мин", "1"),
      ex("Болгарские выпады", true, "3×8-10", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×12-15", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "3×12-15", "2 мин", "1"),
      ex("Тяга нижнего блока на ягодицы", false, "1×Дропсет", "—", "0"),
    ],
  },
  {
    name: "День 19 — Верх",
    block: "Тяжелый блок (неделя 3)",
    exercises: [
      ex("Тяга к поясу в тренажере сидя", true, "3×12-15", "2 мин", "1"),
      ex("Пулловер в блоке", false, "3×12-15", "2 мин", "1"),
      ex("Вертикальная тяга блока широким хватом", false, "2×10-12", "2 мин", "1"),
      ex("Жим гантелей сидя", true, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", false, "1×Дропсет", "—", "0"),
      ex("Сгибания рук с нижнего блока", false, "2×15", "1,30 мин", "1"),
      ex("Разгибания в блоке с канатом/двумя канатами", false, "2×15", "1,30 мин", "1"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },

  // ============ ТЯЖЕЛЫЙ БЛОК — НЕДЕЛЯ 4 ============
  {
    name: "День 22 — Низ",
    block: "Тяжелый блок (неделя 4)",
    exercises: [
      ex("Выпады с гантелями с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Тяга нижнего блока на ягодицы", true, "3×10-12", "2 мин", "1"),
      ex("Отведение ноги в кроссовере", false, "3×15", "1,30 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", false, "4×12-15", "2 мин", "1"),
      ex("Молитва в блоке", false, "3×15", "1,30 мин", "1"),
      ex("КАРДИО", false, "15-20 мин", "—", "—"),
    ],
  },
  {
    name: "День 24 — Верх",
    block: "Тяжелый блок (неделя 4)",
    exercises: [
      ex("Вертикальная тяга блока широким хватом", true, "3×10-12", "2 мин", "1"),
      ex("Сведение в Peck-Deck на низ груди", true, "3×12-15", "2 мин", "1"),
      ex("Тяга нижнего блока стоя", false, "3×8-10", "2 мин", "1"),
      ex("Жим в тренажере сидя/в Хаммере на плечи", true, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", false, "1×Дропсет", "—", "0"),
      ex("Разгибания в блоке с прямой рукоятью", false, "3×15", "1,30 мин", "1"),
      ex("Молотки с гантелями", false, "2×15", "1,30 мин", "1"),
    ],
  },
  {
    name: "День 26 — Низ",
    block: "Тяжелый блок (неделя 4)",
    exercises: [
      ex("Жим ногами с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Ягодичный мостик", false, "3×8-10", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×12-15", "2 мин", "1"),
      ex("Румынская тяга по 1-й ноге", true, "2×10-12", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "3×10-12", "2 мин", "1"),
      ex("Подъемы ног в висе", false, "3×15", "1,30 мин", "1"),
      ex("КАРДИО", false, "15-20 мин", "—", "—"),
    ],
  },

  // ============ ТЯЖЕЛЫЙ БЛОК — НЕДЕЛЯ 5 ============
  {
    name: "День 29 — Низ",
    block: "Тяжелый блок (неделя 5)",
    exercises: [
      ex("Приседания в Смите с акцентом на ягодицы", true, "3×10-12", "3 мин", "1"),
      ex("Сгибания ног лежа в тренажере на бицепс бедра", true, "3×10-12", "2 мин", "1"),
      ex("Ягодичный мостик", false, "3×12-15", "2 мин", "1"),
      ex("Отведение ноги в кроссовере", false, "2×10-12", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "1×Дропсет", "—", "0"),
      ex("КАРДИО", false, "15 мин", "—", "—"),
    ],
  },
  {
    name: "День 31 — Верх",
    block: "Тяжелый блок (неделя 5)",
    exercises: [
      ex("Тяга нижнего блока с упором в скамью", true, "3×12-15", "2 мин", "1"),
      ex("Пулловер в блоке", false, "3×12-15", "2 мин", "1"),
      ex("Вертикальная тяга блока широким хватом", false, "2×10-12", "2 мин", "1"),
      ex("Жим гантелей сидя", true, "3×10-12", "2 мин", "1"),
      ex("Отведение гантелей в стороны стоя", false, "1×Дропсет", "—", "0"),
      ex("Сгибания рук с нижнего блока", false, "2×15", "1,30 мин", "1"),
      ex("Разгибания в блоке с канатом/двумя канатами", false, "2×15", "1,30 мин", "1"),
    ],
  },
  {
    name: "День 33 — Низ",
    block: "Тяжелый блок (неделя 5)",
    exercises: [
      ex("Ягодичный мостик", true, "3×8-10", "2 мин", "1"),
      ex("Выпады с гантелями с акцентом на ягодицы", true, "3×8-10", "3 мин", "1"),
      ex("Приседания с нижним блоком", true, "3×12-15", "2 мин", "1"),
      ex("Разведения ног в тренажере", false, "3×12-15", "2 мин", "1"),
      ex("Тяга нижнего блока на ягодицы", false, "1×Дропсет", "—", "0"),
      ex("Молитва в блоке", false, "3×15", "1,30 мин", "1"),
      ex("КАРДИО", false, "15-20 мин", "—", "—"),
    ],
  },

  // ============ ЛЕГКИЙ БЛОК — РАЗГРУЗОЧНАЯ НЕДЕЛЯ ============
  {
    name: "Разгрузка, день 1 — Верх",
    block: "Легкий блок (разгрузка)",
    exercises: [
      ex("Вертикальная тяга блока широким хватом", true, "4×15", "2 мин", "—"),
      ex("Сведение в Peck-Deck на низ груди", true, "4×15", "2 мин", "—"),
      ex("Подъем штанги на бицепс", false, "3×15", "2 мин", "—"),
      ex("Разгибания в блоке с прямой рукоятью", false, "3×15", "2 мин", "—"),
      ex("Отведение гантелей в стороны стоя", false, "3×15", "1 мин", "2"),
      ex("КАРДИО", false, "30 мин", "—", "—"),
    ],
  },
  {
    name: "Разгрузка, день 4 — Низ",
    block: "Легкий блок (разгрузка)",
    exercises: [
      ex("Приседания плие с гантелью", true, "3×15", "2 мин", "—"),
      ex("Мертвая тяга", true, "3×15", "2 мин", "—"),
      ex("Отведение ноги в кроссовере", false, "3×15", "2 мин", "—"),
      ex("КАРДИО", false, "30 мин", "—", "—"),
    ],
  },
];
