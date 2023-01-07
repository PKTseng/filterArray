const defineType = {
  alive: "number",
  current: "number",
  current_r: "number",
  current_s: "number",
  current_t: "number",
  demand: "number",
  energy: "number",
  immediate_demand: "number",
  meter_type: "string",
  pf: "number",
  power: "number",
  remark: "string",
  temperature_r: "number",
  temperature_s: "number",
  temperature_t: "number",
  voltage: "number",
  voltage_avg: "number",
  voltage_line_avg: "number",
  voltage_r: "number",
  voltage_r_s: "number",
  voltage_s: "number",
  voltage_s_t: "number",
  voltage_t: "number",
  voltage_t_r: "number",
};

let payloadList = [
  {
    access_token: "637f0c2f8d0a9ddb72f8dd9a",
    data: [
      {
        ts: 1669272948132,
        values: {
          meter_type: "PM-B1L3-W1-001",
          energy: "PowerMeter1",
          voltage: 38.51,
          current: 23.9390761,
          power: 3.8457791,
          pf: "Long", // 常整數
          test1: "test1",
        },
      },
      {
        ts: 1669272948135,
        values: {
          meter_type: "PM-B1L3-W1-002",
          energy: "PowerMeter2",
          voltage: 38.52,
          current: 23.9390762,
          power: 3.8457792,
          remark: "remark",
          immediate_demand: "immediate_demand",
          test1: "test2",
          test2: "test2",
        },
      },
    ],
  },
  {
    access_token: "737f0c2f8d0a9ddb72f8dd9a",
    data: [
      {
        ts: 1669272948132,
        values: {
          meter_type: "PM-B1L3-W1-001",
          energy: "PowerMeter",
          voltage: 38.5,
          current: 23.939076,
          power: 3.845779,
          test1: "test22",
          test2: "test2333",
        },
      },
      {
        ts: 1669272948135,
        values: {
          meter_type: "PM-B1L3-W1-001",
          energy: "PowerMeter",
          voltage: 38.5,
          current: 23.939076,
          power: 3.845779,
          test1: "test22222",
          test2: "test2333222",
        },
      },
    ],
  },
];

function filterPayload(payload) {
  payload.forEach((deviceTelemetry) => {
    try {
      deviceTelemetry.data.forEach((data) => {
        let newValue = {};
        for (const key in data.values) {
          if (defineType[key] === undefined) {
            continue;
          }
          const type = defineType[key];
          if (typeof data.values[key] !== type) {
            continue;
          }
          newValue[key] = data.values[key];
        }
        data.values = newValue;
      });
    } catch (error) {
      console.log(error);
    }
  });
}

// msg.payload =
filterPayload(payloadList);
