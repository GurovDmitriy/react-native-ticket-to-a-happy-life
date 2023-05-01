import { ActionStatus } from "../store/types";

export function getStatus(): GetStatusType {
  return {
    useless: (state) => state.status === ActionStatus.useless,
    pending: (state) => state.status === ActionStatus.pending,
    success: (state) => state.status === ActionStatus.success,
    failure: (state) => state.status === ActionStatus.failure,
  };
}

export type GetStatusType = {
  useless: (state: { status: ActionStatus }) => boolean;
  pending: (state: { status: ActionStatus }) => boolean;
  success: (state: { status: ActionStatus }) => boolean;
  failure: (state: { status: ActionStatus }) => boolean;
};
