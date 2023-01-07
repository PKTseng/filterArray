// const defineType = {
//   alive: "number",
//   current: "number",
//   current_r: "number",
//   current_s: "number",
//   current_t: "number",
//   demand: "number",
//   energy: "number",
//   immediate_demand: "number",
//   meter_type: "string",
//   pf: "number",
//   power: "number",
//   remark: "string",
//   temperature_r: "number",
//   temperature_s: "number",
//   temperature_t: "number",
//   voltage: "number",
//   voltage_avg: "number",
//   voltage_line_avg: "number",
//   voltage_r: "number",
//   voltage_r_s: "number",
//   voltage_s: "number",
//   voltage_s_t: "number",
//   voltage_t: "number",
//   voltage_t_r: "number",
// };

var defineType = {
  ac_freq: "number",
  ac_power: "number",
  dc_current: "number",
  dc_power: "number",
  dc_voltage: "number",
  electronic_flow: [
    "array",
    {
      current: "number",
      flow_type: "string",
      freq: "number",
      power: "number",
      seq: "number",
      voltage: "number",
    },
  ],
  kwh: "number",
  kwh_daily: "number",
  temperature: "number",
};

let payloadList = [
  {
    access_token: "xmYe2bpCskJHQC3t2iyi",
    data: [
      {
        ts: 1672202618288,
        values: {
          ac_freq: 383.8,
          ac_power: 383.8,
          dc_current: 383.5,
          dc_power: 28.45,
          dc_voltage: 29.1,
          kwh: 383.5,
          kwh_daily: 28.45,
          temperature: 29.1,
          electronic_flow: [
            {
              current: 383.8,
              flow_type: "test",
              freq: 383.8,
              power: 383.8,
              seq: 383.8,
              voltage: 383.8,
            },
            {
              current: 383.8,
              flow_type: "test",
              freq: 383.8,
              power: 383.8,
              seq: 383.8,
              voltage: 383.8,
            },
          ],
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
