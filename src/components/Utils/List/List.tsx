// styles
import s from "./List.module.css";

interface ListProps<T> {
  items: [];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <ul className={s.list}>{props.items.map(props.renderItem)}</ul>;
}
