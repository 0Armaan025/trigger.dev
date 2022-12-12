import type { APIConnection, Organization } from ".prisma/client";
import { prisma } from "~/db.server";

export async function createAPIConnection({
  organizationId,
  title,
  apiIdentifier,
  scopes,
  type,
}: Pick<APIConnection, "title" | "apiIdentifier" | "type" | "scopes"> & {
  organizationId: Organization["id"];
}) {
  return await prisma.aPIConnection.create({
    data: {
      title,
      apiIdentifier,
      type,
      scopes,
      organization: {
        connect: {
          id: organizationId,
        },
      },
    },
  });
}
