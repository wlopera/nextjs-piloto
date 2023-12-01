import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-200">correo: {user.email}</p>
            </div>
            <Image
              src={user.avatar}
              alt="imagen"
              width={800}
              height={600}
              className="rounded-full w-24"
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;
