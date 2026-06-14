import Image from "next/image";
import { profile, profileAssets } from "@/data/profile";

export function ProfilePortrait() {
  return (
    <div className="surface-card rounded-lg bg-white p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-[#d8c7ae] bg-[#f4efe6] text-center">
        <div
          className="absolute inset-x-0 top-0 h-20 bg-[#1f5c43]/8"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-8 left-8 right-8 h-px bg-[#d8c7ae]"
          aria-hidden="true"
        />
        <div
          className="absolute left-8 top-8 h-16 w-px bg-[#c79a38]"
          aria-hidden="true"
        />

        {profileAssets.profileImage.isAvailable ? (
          <Image
            src={profileAssets.profileImage.src}
            alt={profileAssets.profileImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover object-[50%_35%]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
            <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full border border-[#c79a38] bg-[#fffdf8] text-xl font-bold text-[#1f5c43]">
              KC
            </div>
            <p className="text-sm font-bold text-[#22211f]">
              Portrait frame
            </p>
            <p className="mt-2 text-sm leading-6 text-[#625f59]">
              Professional image planned
            </p>
          </div>
        )}

        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#22211f]/45 to-transparent"
          aria-hidden="true"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase text-[#9b6f20]">
        <span>Practical systems</span>
        <span className="size-2 rounded-full bg-[#b6473a]" />
        <span>{profile.theme}</span>
      </div>
    </div>
  );
}
