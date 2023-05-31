import AllArtists from "@/components/AllArtists";
import NavBar from "@/components/NavBar";
//import { db } from '@/server/db'
import { GetServerSideProps } from "next";

import {prisma} from '../../lib/prisma'


const Home = (props: any) => {

  

  return (
  <div className="flex flex-col">
        <NavBar/>
        <div className="flex">
          <div>
            <AllArtists props={props.artists}/>
          </div>
        </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await prisma.artista.findMany();

  return {
    props: { artists: JSON.parse(JSON.stringify(result)) },
  };
}