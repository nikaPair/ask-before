"use client";

import React from "react";
import { Wrapper, AvatarImg } from "./Avatars.styled";

import { avatarsData } from "./data";

const Avatars = () => {
  return (
    <Wrapper>
      {avatarsData.map((avatar, index) => (
        <AvatarImg
          key={index}
          $size={avatar.size}
          $img={avatar.img}
          style={{ top: avatar.top, left: avatar.left }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              delay: avatar.delay,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.8,
              ease: "easeOut",
            },
          }}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </Wrapper>
  );
};

export default Avatars;
