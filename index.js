const defineType = {
  meter_type: 'string',
  remark: 'string',
  voltage: 'number',
  current: 'number',
  power: 'number',
  pf: 'number',
  energy: 'number',
  immediate_demand: 'number',
}

let payloadList = [
  {
    access_token: '637f0c2f8d0a9ddb72f8dd9a',
    data: [
      {
        ts: 1669272948132,
        values: {
          meter_type: 'PM-B1L3-W1-001',
          energy: 'PowerMeter1',
          voltage: 38.51,
          current: 23.9390761,
          power: 3.8457791,
          pf: 'Long', // 常整數
          test1: 'test1',
        },
      },
      {
        ts: 1669272948135,
        values: {
          meter_type: 'PM-B1L3-W1-002',
          energy: 'PowerMeter2',
          voltage: 38.52,
          current: 23.9390762,
          power: 3.8457792,
          remark: 'remark',
          immediate_demand: 'immediate_demand',
          test1: 'test2',
          test2: 'test2',
        },
      },
    ],
  },
  // {
  //   access_token: '737f0c2f8d0a9ddb72f8dd9a',
  //   data: [
  //     {
  //       ts: 1669272948132,
  //       values: {
  //         meter_type: 'PM-B1L3-W1-001',
  //         energy: 'PowerMeter',
  //         voltage: 38.5,
  //         current: 23.939076,
  //         power: 3.845779,
  //       },
  //     },
  //     {
  //       ts: 1669272948135,
  //       values: {
  //         meter_type: 'PM-B1L3-W1-001',
  //         energy: 'PowerMeter',
  //         voltage: 38.5,
  //         current: 23.939076,
  //         power: 3.845779,
  //       },
  //     },
  //   ],
  // },
]

let finalList = []

const defineTypeKey = Object.keys(defineType)
const defineTypeValue = Object.values(defineType)

// console.log(JSON.parse(JSON.stringify(defineTypeKey)))
//['meter_type', 'remark', 'voltage', 'current', 'power', 'pf', 'energy', 'immediate_demand']

function filterPayload() {
  // let newArr =

  payloadList.forEach((payload, payloadIndex) => {
    // console.log(JSON.parse(JSON.stringify(payload.data)))
    payload.data.forEach((data, dataIndex) => {
      // console.log(JSON.parse(JSON.stringify(data.values)))

      let newValue = []
      Object.entries(data.values).map(([key, value]) => {
        Object.keys(defineType).map((type) => {
          if (key === type) {
            newValue.push({ [key]: value })
            // return { [key]: [value] }
          }
        })
      })

      console.log(JSON.parse(JSON.stringify(newValue)))
      // console.log(JSON.parse(JSON.stringify(test)))
    })
  })
}
// console.log(JSON.parse(JSON.stringify(finalList)))

// console.log(JSON.parse(JSON.stringify(finalList)))

filterPayload()
