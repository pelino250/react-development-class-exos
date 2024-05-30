import "./list.css";

type ItemListProp = {
  items: string[];
}

export default function ItemList({ items }: ItemListProp) {
  return <ul className={"list-container"}>
    {
      items.map((item, index) => <li key={index} className={"list-item"}>{item}</li>)
    }
  </ul>
}