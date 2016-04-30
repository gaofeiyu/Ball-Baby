console.log('=== Global Init ===')
const BASE_DATA = {
  user:{
    sex: [
      {
        name: '男',
        value: '1'
      },
      {
        name: '女',
        value: '0'
      },
      {
        name: '保密',
        value: '2'
      }
    ],
  },
  football: {
    place: [
      {
        name: '[CF]中锋',
        value: '0',
        type: '0',
      },
      {
        name: '[LW]左前锋',
        value: '1',
        type: '0',
      },
      {
        name: '[RW]右前锋',
        value: '2',
        type: '0',
      },
      {
        name: '[SS]影子前锋',
        value: '3',
        type: '0',
      },
      {
        name: '[CDM]后腰',
        value: '4',
        type: '1',
      },
      {
        name: '[CAM]前腰',
        value: '5',
        type: '1',
      },
      {
        name: '[LWM]左前卫',
        value: '6',
        type: '1',
      },
      {
        name: '[RWM]右前卫',
        value: '7',
        type: '1',
      },
      {
        name: '[SW]拖后中卫',
        value: '8',
        type: '2',
      },
      {
        name: '[CB]中后卫',
        value: '9',
        type: '2',
      },
      {
        name: '[LB]左后卫',
        value: '10',
        type: '2',
      },
      {
        name: '[RB]右后卫',
        value: '11',
        type: '2',
      },
      {
        name: '[GK]门将',
        value: '12',
        type: '3',
      },
      {
        name: '[^o^]球迷',
        value: '13',
        type: '4',
      },
    ],
    expertRules: [
      {
        name: '3 vs 3',
        type: '0',
      },
      {
        name: '5 vs 5',
        type: '1',
      },
      {
        name: '7 vs 7',
        type: '2',
      },
      {
        name: '11 vs 11',
        type: '3',
      },

    ]
  },
};

module.exports = BASE_DATA;