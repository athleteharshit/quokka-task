import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';

export type MemberList = {
  memberId: string;
  name: string;
  email: string;
  address: string;
  organization: string;
  designation: string;
  contact: string;
  status: boolean;
};

type TableContainerProps = {
  list: MemberList[];
  ascending: boolean;
  handleEdit: (id: string) => void;
  handleStatus: (id: string) => void;
};

function TableContainer({
  list,
  ascending,
  handleEdit,
  handleStatus,
}: TableContainerProps) {
  const [memberList, setMemberList] = useState(list);

  useEffect(() => {
    const newMemberList = [...list].sort((a, b) => {
      if (!ascending)
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
    });
    setMemberList([...newMemberList]);
  }, [list, ascending]);

  return (
    <Table className="my-2">
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Address</Table.HeadCell>
        <Table.HeadCell>Organization</Table.HeadCell>
        <Table.HeadCell>Designation</Table.HeadCell>
        <Table.HeadCell>Contact</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {memberList.length > 0 ? (
          memberList.map((item) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={item.memberId}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.organization}</Table.Cell>
                <Table.Cell>{item.designation}</Table.Cell>
                <Table.Cell>{item.contact}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleEdit(item.memberId)}>
                    Edit
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleStatus(item.memberId)}>
                    {item.status ? 'Block' : 'Unblock'}
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })
        ) : (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              No Data Available
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

export default TableContainer;
