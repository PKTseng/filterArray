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
  {
    access_token: '737f0c2f8d0a9ddb72f8dd9a',
    data: [
      {
        ts: 1669272948132,
        values: {
          meter_type: 'PM-B1L3-W1-001',
          energy: 'PowerMeter',
          voltage: 38.5,
          current: 23.939076,
          power: 3.845779,
          test1: 'test22',
          test2: 'test2333',
        },
      },
      {
        ts: 1669272948135,
        values: {
          meter_type: 'PM-B1L3-W1-001',
          energy: 'PowerMeter',
          voltage: 38.5,
          current: 23.939076,
          power: 3.845779,
          test1: 'test22222',
          test2: 'test2333222',
        },
      },
    ],
  },
]

let finalList = []

function filterPayload() {
  payloadList.forEach((payload, payloadIndex) => {
    payload.data.forEach((data, dataIndex) => {
      let newValue = []

      Object.entries(data.values).forEach(([key, value]) => {
        Object.keys(defineType).forEach((type) => {
          if (key === type) {
            newValue.push({ [key]: value })
          }
        })
      })

      let transformObj = newValue.reduce((acc, current) => {
        return Object.assign(acc, current)
      }, {})

      payloadList[payloadIndex].data[dataIndex].values = transformObj

      finalList = payloadList
    })
  })

  console.log(finalList)
}

filterPayload()
