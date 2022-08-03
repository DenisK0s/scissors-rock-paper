import styled from "styled-components";

const StyledList = styled.ul`
  outline: 1px solid #ffff;
`;

interface ListProps<T> {
  items: [];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <StyledList>{props.items.map(props.renderItem)}</StyledList>;
}
