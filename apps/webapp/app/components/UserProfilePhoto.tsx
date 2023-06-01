import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useOptionalUser } from "~/hooks/useUser";
import { cn } from "~/utils/cn";

export function UserProfilePhoto({ className }: { className?: string }) {
  const user = useOptionalUser();
  return (
    <UserAvatar
      avatarUrl={user?.avatarUrl}
      name={user?.name}
      className={className}
    />
  );
}

export function UserAvatar({
  avatarUrl,
  name,
  className,
}: {
  avatarUrl?: string | null;
  name?: string | null;
  className?: string;
}) {
  return avatarUrl ? (
    <img
      className={cn("aspect-square rounded-full", className)}
      src={avatarUrl}
      alt={name ?? "User"}
    />
  ) : (
    <UserCircleIcon className={cn("aspect-square text-slate-400", className)} />
  );
}
