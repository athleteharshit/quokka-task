import { Table } from 'flowbite-react';

function TableContainer() {
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
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17"
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Edit
            </span>
          </Table.Cell>
          <Table.Cell>Block</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default TableContainer;
