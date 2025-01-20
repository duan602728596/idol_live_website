import type { VNode } from 'vue';
import { List } from 'ant-design-vue';
import * as dayjs from 'dayjs';
import type { LogItem } from '../../components/InitialState/InitialStateTypes';


/* 渲染list item */
export function listRenderItem({ item }: { item: LogItem }): VNode {
  const time: string = dayjs.unix(item.run_time).format('YYYY-MM-DD HH:mm:ss');

  return (
    <List.Item key={ `${ item.run_time }-${ item.message }` }>
      <time class="mr-[8px]">[{ time }]</time>
      { item.message }
    </List.Item>
  );
}