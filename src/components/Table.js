import { useState } from 'react';
import TableRow from './TableRow';
import SearchInput from './SearchInput';
import './Table.css';

const Table = ({ data, handleDelete }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const orderMap = {
    urgent: 1,
    regular: 2,
    trivial: 3,
  };

  const sortedData = data.sort(
    (a, b) => orderMap[a.priority] - orderMap[b.priority]
  );

  const filteredData = sortedData.filter((item) =>
    item.job.match(new RegExp(search, 'i'))
  );
  console.log(filteredData);
  return (
    <section>
      <SearchInput search={search} onInputChange={handleSearchChange} />
      {filteredData.map((el, i) => (
        <TableRow key={el.id} {...el} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default Table;
