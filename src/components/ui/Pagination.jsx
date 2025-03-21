import * as React from 'react';
import { ChevronRight, ChevronLeft, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const Pagination = React.forwardRef(({ className, ...props }, ref) => (
    <nav 
        ref={ref} 
        role='navigation'
        aria-label='pagination'
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
));
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
    <ul 
        ref={ref} 
        className={cn('flex flex-row items-center gap-2', className)}
        {...props}
    />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = ({ children, className, ...props }) => (
    <li className={cn('flex items-center', className)} {...props}>{children}</li>
);

const PaginationLink = ({ href, children, className, ...props }) => (
    <a 
        href={href} 
        className={cn(buttonVariants({ variant: 'outline' }), 'px-3 py-1', className)}
        {...props}
    >
        {children}
    </a>
);

const PaginationPrevious = ({ href }) => (
    <PaginationLink href={href} className='flex items-center gap-1'>
        <ChevronLeft size={16} /> Prev
    </PaginationLink>
);

const PaginationNext = ({ href }) => (
    <PaginationLink href={href} className='flex items-center gap-1'>
        Next <ChevronRight size={16} />
    </PaginationLink>
);

const PaginationEllipsis = () => (
    <span className='px-2 text-gray-500'>
        <MoreHorizontal size={16} />
    </span>
);

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis };