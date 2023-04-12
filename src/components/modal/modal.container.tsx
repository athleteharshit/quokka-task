import { Modal, Button, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { MemberList } from '../table-container/table.container';
import getUniqueId from '../../utils/common.fun';

type ModalContainerProps = {
  show: boolean;
  onClose: () => void;
  member: MemberList & { action: 'Edit' | 'Add' };
  addMember: (user: MemberList & { action: 'Edit' | 'Add' }) => void;
};

function ModalContainer({
  show,
  onClose,
  member,
  addMember,
}: ModalContainerProps) {
  const [user, setUser] = useState({
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

  useEffect(() => {
    if (member.memberId && member.action === 'Edit') {
      setUser({ ...member });
    } else {
      setUser({
        memberId: '',
        name: '',
        email: '',
        address: '',
        organization: '',
        designation: '',
        contact: '',
        status: false,
        action: 'Add',
      });
    }
  }, [member]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
    addMember({
      ...user,
      ...(user.action === 'Add' && { memberId: getUniqueId() }),
    });
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>{user.action}</Modal.Header>
        <Modal.Body>
          {user.action === 'Edit' && (
            <TextInput
              value={user.memberId}
              onChange={handleChange}
              type="text"
              name="memberId"
              placeholder="Member ID"
              readOnly
            />
          )}
          <div className="my-2 flex gap-2">
            <TextInput
              className="basis-1/2"
              value={user.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <TextInput
              className="basis-1/2"
              value={user.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="my-2 flex gap-2">
            <TextInput
              className="basis-1/2"
              value={user.address}
              onChange={handleChange}
              type="text"
              name="address"
              placeholder="Address"
              required
            />
            <TextInput
              className="basis-1/2"
              value={user.organization}
              onChange={handleChange}
              type="text"
              name="organization"
              placeholder="Organization"
              required
            />
          </div>
          <div className="my-2 flex gap-2">
            <TextInput
              className="basis-1/2"
              value={user.designation}
              onChange={handleChange}
              type="text"
              name="designation"
              placeholder="Designation"
              required
            />
            <TextInput
              className="basis-1/2"
              value={user.contact}
              onChange={handleChange}
              type="number"
              name="contact"
              placeholder="Contact"
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Add</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalContainer;
