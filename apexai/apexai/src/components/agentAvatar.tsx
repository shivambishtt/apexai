import React from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei, botttsNeutral, initials } from "@dicebear/collection";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedSeedProps {
  seed: string;
  classname?: string;
  variant: "botttsNeutral" | "initials";
}

function getInitials(name: string): string {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0][0].toUpperCase(); // return value for first name
  return parts[0][0] + parts[parts.length - 1][0].toUpperCase();
}

function AgentAvatar({ seed, classname, variant }: GeneratedSeedProps) {
  if (!seed || !variant) {
    return null;
  }

  const mapStrToObj = {
    botttsNeutral: botttsNeutral,
    initials: initials,
  }; // here we created mapstrobj because our createavatar takes

  const avatar = createAvatar(mapStrToObj[variant] ?? "botttsNeutral", {
    seed: seed!,
  });
  return (
    <div>
      <Avatar>
        <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
        <AvatarFallback>{getInitials(seed)}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default AgentAvatar;
