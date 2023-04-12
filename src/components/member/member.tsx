import { useState } from 'react';
import { Button } from 'flowbite-react';
import TableContainer, { MemberList } from '../table-container/table.container';

function Member() {
  const [memberList, setMemberList] = useState<MemberList[]>([
    {
      memberId: '',
      name: 'harshit',
      email: 'gupta545@gmail.com',
      address: 'kanpur',
      organization: 'appinventive',
      designation: 'react js developer',
      contact: '7388544475',
      status: false,
    },
  ]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Member List</h1>
        <Button>Add a member</Button>
      </div>
      <TableContainer list={memberList} />
    </div>
  );
}

export default Member;
