import FilterItem from "./filterItem";
export default function FilterList(props) {
  return (
    <ul>
      {props?.data?.map((ele, i) => (
        <li key={i}>
          <FilterItem name={ele.name} code={ele.code} />
        </li>
      ))}
    </ul>
  );
}
