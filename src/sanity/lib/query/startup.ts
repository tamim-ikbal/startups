import { Startup } from "@/types/startup";
import { defineQuery } from "next-sanity";
import { client } from "../client";

interface GetStartupsProps {
  query?: string;
}

export const getStartups = async ({ query }: GetStartupsProps = {}): Promise<
  Startup[]
> => {
  const startQuery = `*[
    _type == "startup" &&
    (
      !defined($search) ||
      title match $search ||
      category match $search ||
      author->name match $search
    )
  ] | order(views desc) {
    _id,
    title,
    slug,
    author -> {_id, name, email, image},
    views,
    date,
    description,
    category,
    image,
  } [0...10]`;

  const params = {
    search: `*${query || ""}*`, // wildcard for partial match
  };

  const startups = await client.fetch(startQuery, params);
  return startups;
};

export const getStartupsByAuthor = async (id: string): Promise<Startup[]> => {
  const startQuery =
    defineQuery(`*[ _type=='startup' && references('${id}')] | order(views desc) {
  _id,
    title,
    slug, 
    author -> {_id,name,email,image}, 
    views, 
    date,
    description,
    category,
    image,
} [0...10]`);
  const startups = await client.fetch(startQuery);
  return startups;
};

export const getStartupById = async (slug: string): Promise<Startup> => {
  const startQuery = defineQuery(`*[ _type=='startup' && slug.current==$slug] {
  _id,
    title,
    slug, 
    author -> {_id,name,email,image}, 
    views, 
    date,
    description,
    category,
    image,
    pitch,
} [0]`);
  const startups = await client.fetch(startQuery, { slug });
  return startups;
};
