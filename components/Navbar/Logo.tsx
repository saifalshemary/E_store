import React from 'react';
import { Button } from '../ui/button';
import Link from "next/link";
import { VscCode } from 'react-icons/vsc';
import {links} from '../../utils/links';


function Logo() {
  return (
    <Button asChild size={'icon'} >
        <Link  href={links.HOME.href}>
          <VscCode/>
        </Link>
    </Button>
  )
}

export default Logo