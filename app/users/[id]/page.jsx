import Image from "next/image";
import Link from "next/link";

export const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const UserPage = async ({ params }) => {
  const data = await getUser(params.id);
  //console.log(123, data)
  return (
    <div>
      <div className="bg-lime-700 mb-2 p-4 rounded-md text-black">
      <Image
          src={data.avatar}
          alt="imagen"
          width={800}
          height={600}
          className="rounded-full w-60 m-auto"
        />
        <div className="">
          <h5 className="font-bold text-3xl">
            {data.first_name} {data.last_name}
          </h5>
          <hr />
          <p className="text-slate-200 text-3xl">{data.email}</p>
        </div>      
      </div>
      <div className="text-end ">
        <Link className="rounded-md bg-lime-700 text-white text-lg" href="/">
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
