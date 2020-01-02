const initialState = {
  tokenOwnershipTransferPending: false,
  tokenOwnershipTransferSuccess: false,
  tokenOwnershipTransferError: false
};
// Actions
export const types = {
  TRANSFER_TOKEN_OWNERSHIP: "TRANSFER_TOKEN_OWNERSHIP",
  TRANSFER_TOKEN_OWNERSHIP_SUCCESS: "TRANSFER_TOKEN_OWNERSHIP_SUCCESS",
  TRANSFER_TOKEN_OWNERSHIP_ERROR: "TRANSFER_TOKEN_OWNERSHIP_ERROR"
};

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.TRANSFER_TOKEN_OWNERSHIP:
      return {
        ...state,
        tokenOwnershipTransferPending: true,
        tokenOwnershipTransferSuccess: false,
        tokenOwnershipTransferError: false
      };
    case types.TRANSFER_TOKEN_OWNERSHIP_SUCCESS:
      return {
        ...state,
        tokenOwnershipTransferPending: false,
        tokenOwnershipTransferSuccess: action.payload
      };
    case types.TRANSFER_TOKEN_OWNERSHIP_ERROR:
      return {
        ...state,
        tokenOwnershipTransferPending: false,
        tokenOwnershipTransferError: action.payload
      };
    default:
      return state;
  }
}

export const transferTokenOwnership = payload => ({
  type: types.TRANSFER_TOKEN_OWNERSHIP,
  payload
});

export const transferTokenOwnershipSuccess = payload => ({
  type: types.TRANSFER_TOKEN_OWNERSHIP_SUCCESS,
  payload
});

export const transferTokenOwnershipFailure = payload => ({
  type: types.TRANSFER_TOKEN_OWNERSHIP_ERROR,
  payload
});
