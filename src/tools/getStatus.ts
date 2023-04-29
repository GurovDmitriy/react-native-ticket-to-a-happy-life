import { ActionStatus } from "../store/types";

export function getStatus() {
  return {
    useless: (state: { status: ActionStatus }) =>
      state.status === ActionStatus.useless,

    pending: (state: { status: ActionStatus }) =>
      state.status === ActionStatus.pending,

    success: (state: { status: ActionStatus }) =>
      state.status === ActionStatus.success,

    failure: (state: { status: ActionStatus }) =>
      state.status === ActionStatus.failure,
  };
}
