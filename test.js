const defineType = {
  meter_type: "string",
  remark: "string",
  voltage: "number",
  current: "number",
  power: "number",
  pf: "number",
  energy: "number",
  immediate_demand: "number",
};

const values = {
  meter_type: "PM-B1L3-W1-001",
  energy: "PowerMeter1",
  voltage: "38.51",
  current: 23.9390761,
  power: 3.8457791,
  pf: "Long", // 常整數
  test1: "test1",
};

function filterPayload() {
  let newValue = {};
  for (const key in values) {
    if (defineType[key] === undefined) {
      continue;
    }

    const type = defineType[key];

    if (typeof values[key] !== type) {
      continue;
    }

    r[key] = values[key];
  }
  return newValue;
}

filterPayload();

// console.log(newArray);

// ========================================================================
