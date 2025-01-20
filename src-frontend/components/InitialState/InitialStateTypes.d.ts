/* 定义城市信息 */
export interface AddressItem {
  id: string;
  name: string;
}

/* 定义爬虫信息 */
export interface WeiboSpiderItem {
  aid: string;
  bid: string;
  uid: string;
  screen_name: string;
  avatar_hd: string;
  raw_text: string;
  created_at: number;
  edit_at: number | null;
  area: string;
  pics: Array<string> | null;
}

/* 定义log */
export interface LogItem {
  run_time: number;
  message: string;
}

/* ========== initialState ========== */
interface IndexInitialState {
  address_list: Array<AddressItem>;
}

interface LiveInitialState {
  weibo_list: Array<WeiboSpiderItem>;
  address_val: string;
}

interface OperationInitialState {
  log: Array<LogItem>;
}

export type InitialState = IndexInitialState | LiveInitialState | OperationInitialState;