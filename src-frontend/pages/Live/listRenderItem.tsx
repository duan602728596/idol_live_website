import type { VNode } from 'vue';
import { List, Avatar, Image } from 'ant-design-vue';
import * as dayjs from 'dayjs';
import style from './listRenderItem.sass';
import HtmlRender from './HtmlRender.vue';
import type { WeiboSpiderItem } from '../../components/InitialState/InitialStateTypes';

/* 渲染图片 */
function PicsRender(pics: Array<string> | null): VNode | null {
  if (!pics || pics.length === 0) return null;

  const nodes: Array<VNode> = pics.map((pic: string): VNode => {
    return (
      <div key={ pic } class="inline-block mx-[8px] my-[8px]">
        <Image class={ style.image } src={ `/proxy_image?u=${ pic }` } />
      </div>
    );
  });

  return <Image.PreviewGroup>{ nodes }</Image.PreviewGroup>;
}

/* 渲染list item */
export function listRenderItem({ item }: { item: WeiboSpiderItem }): VNode {
  const timeText: string = item.edit_at ? '编辑' : '发布',
    time: string = dayjs.unix(item.edit_at ?? item.created_at).format('YYYY-MM-DD HH:mm:ss');

  return (
    <List.Item key={ item.bid } class={ style.listItem }>
      <List.Item.Meta title={ <a href={ `https://weibo.com/u/${ item.uid }` } target="_blank">{ item.screen_name }</a> }
        avatar={ <Avatar src={ `/proxy_image?u=${ item.avatar_hd }` } /> }
      />
      <div class="flex mb-[8px]">
        <time class="grow shrink-0">{ timeText }时间：{ time }</time>
        <div class="shrink-0">
          <a href={ `https://weibo.com/${ item.uid }/${ item.bid }`} target="_blank">查看原微博</a>
        </div>
      </div>
      <HtmlRender html={ item.raw_text } />
      { PicsRender(item.pics) }
    </List.Item>
  );
}