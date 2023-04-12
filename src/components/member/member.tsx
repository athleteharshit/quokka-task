import { useState } from 'react';
import { Button } from 'flowbite-react';

import TableContainer, { MemberList } from '../table-container/table.container';
import getUniqueId from '../../utils/common.fun';
import ModalContainer from '../modal/modal.container';

function Member() {
  const [modal, setModal] = useState(false);
  const [member, setMember] = useState({
    memberId: '',
    name: '',
    email: '',
    address: '',
    organization: '',
    designation: '',
    contact: '',
    status: false,
    action: 'Add',
  } as MemberList & { action: 'Edit' | 'Add' });
  const [memberList, setMemberList] = useState<MemberList[]>([
    {
      memberId: getUniqueId(),
      name: 'harshit',
      email: 'gupta545@gmail.com',
      address: 'kanpur',
      organization: 'appinventive',
      designation: 'react js developer',
      contact: '7388544475',
      status: false,
    },
  ]);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleAddMember = (user: MemberList & { action: 'Edit' | 'Add' }) => {
    setMemberList([...memberList, user]);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Member List</h1>
        <Button onClick={handleModalOpen}>Add a member</Button>
      </div>
      <TableContainer list={memberList} />
      <ModalContainer
        show={modal}
        onClose={handleModalClose}
        member={member}
        addMember={handleAddMember}
      />
    </div>
  );
}

export default Member;
