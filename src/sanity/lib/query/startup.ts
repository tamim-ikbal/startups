import { Startup } from "@/types/startup";
import { defineQuery } from "next-sanity";
import { client } from "../client";
import { sanityFetch } from "../live";
import { writeClient } from "../write";

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
    _createdAt
  } [0...10]`;

  const params = {
    search: query || null, // wildcard for partial match
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
    _createdAt
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
    _createdAt
} [0]`);
  const startups = await client.fetch(startQuery, { slug });
  return startups;
};

export const getStartupViewsById = async (
  id: string
): Promise<{ data: Startup }> => {
  const query = defineQuery(`*[ _type=='startup' && _id==$id][0] {
  _id,
    views, 
}`);

  // return await client.withConfig({ useCdn: false }).fetch(query, { id });
  return await sanityFetch({
    query,
    params: { id },
  });
};

export const updateStartupViews = async (id: string, views: number) => {
  return await writeClient.patch(id).set({ views: views }).commit();
};
