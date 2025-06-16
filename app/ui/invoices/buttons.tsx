import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span> <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
      title={`Edit invoice ${id}`}
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  // const handleDelete = () => {
  //   // TODO: 实现删除功能
  //   console.log('Delete invoice:', id);
  // };

  return (
    <>
      <button
        type="button"
        className="rounded-md border p-2 hover:bg-gray-100"
        title={`Delete invoice ${id}`}
      >
        <span className="sr-only">Delete invoice {id}</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
