import { Button } from 'flowbite-react';
import TableContainer from '../table-container/table.container';

function Member() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Member List</h1>
        <Button>Add a member</Button>
      </div>
      <TableContainer />
    </div>
  );
}

export default Member;
