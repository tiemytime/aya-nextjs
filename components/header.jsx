"use client";
import { SignedIn, SignInButton, UserButton, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import {  ChevronDown, FileText, Layout, LayoutDashboard, StarsIcon, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from './ui/dropdown-menu'

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-50 '>
        <nav className='container px-5 py-4 h-16 items-center justify-between flex'>
            <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={200} 
            className=' h-17 w-auto object-contain' />

            </Link>

            <div className='flex items-center space-x-2 md:space-x-4'>
            <SignedIn>
            <Link href = {"/dashboard"}>
            <Button>
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Dashboard</span>
            </Button>
            </Link>
        
      

        </SignedIn>

        {/* Star icon dropdown - accessible to all users */}
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <StarsIcon className='h-4 w-4' />
                    <span className='hidden md:block'>World</span>
                    <ChevronDown className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <User className='h-4 w-4' />
                                <span>Sign In</span>
                            </div>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                </SignedOut>
                <DropdownMenuItem>
                    <Link href={"/vision"} className='flex items-center gap-2'>
                        <FileText className='h-4 w-4' />
                        <span>Vision</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/wall-of-prayers"} className='flex items-center gap-2'>
                        <Layout className='h-4 w-4' />
                        <span>Wall of Prayers</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      <SignedIn>
        <UserButton appearance={{
          elements: { 
            avatarBox: 'w-10 h-10',
            userButtonPopoverCard: 'shadow-xl',
            userPreviewerMainIdentifier: "font-semibold",

          }
        }}
        afterSignOutUrl="/"
      />
      </SignedIn>
      </div>
      </nav>
      
    </header>
  )
}

export default Header
