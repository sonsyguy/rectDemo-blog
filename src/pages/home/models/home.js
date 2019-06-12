import queryHome from '@/services/notice';

export default {
  namespace: 'home',

  state: {
    list: [],
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryHome);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
