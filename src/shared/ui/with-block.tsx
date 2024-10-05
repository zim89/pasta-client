'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useRootWarnWhenUnsavedChanges } from '../lib/hooks/useRootWarnWhenUnsavedChanges'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from './common'

type Props = {
  children: React.ReactElement
  warningHeading?: string
  warningSubtitle?: string
}

export const WithBlock = ({
  children,
  warningHeading = 'Увага!',
  warningSubtitle = 'Не збережені дані можуть будуть втрачені назавжди 😮 Продовжити?',
}: Props) => {
  const router = useRouter()
  const [thereAreUnsavedChanges, setUnsavedChanges] =
    useRootWarnWhenUnsavedChanges()
  const [opened, setOpened] = useState(false)

  // Check whether it's a link, if so, then render a link, otherwise a button
  const isItLink = !!children.props.href

  // If the child element is not a link and isn't clickable, then just render it without blocking features
  if (!isItLink && !children.props.onClick) return children

  return (
    <>
      {thereAreUnsavedChanges ? (
        <>
          {/* When there are unsaved changes, then wrap the passed in children component, but cancel all its events */}
          {/* The wrapper is just opening the warning modal */}
          <div onClick={() => setOpened(true)}>
            <span className='pointer-events-none block w-full'>{children}</span>
          </div>

          <Dialog open={opened} modal onOpenChange={setOpened}>
            <DialogContent aria-describedby='Warning modal'>
              <DialogTitle>{warningHeading}</DialogTitle>
              <DialogDescription>{warningSubtitle}</DialogDescription>
              <DialogFooter className='mt-4 items-center'>
                <Button
                  type='button'
                  variant='plain'
                  onClick={() => setOpened(false)}
                >
                  Закрити
                </Button>
                {isItLink ? (
                  // Link is working through the router imperatively to apply an additional logic, and at the same time it preserves href param for accessibility purposes
                  <Link
                    {...children.props}
                    className='text-sm font-semibold text-danger'
                    onClick={e => {
                      e.preventDefault()

                      // Navigation
                      router.push(children.props.href)

                      // Restore state
                      setOpened(false)
                      setUnsavedChanges(false)
                    }}
                  >
                    Продовжити
                  </Link>
                ) : (
                  <Button
                    type='button'
                    {...children.props}
                    variant='link'
                    className='text-danger'
                    onClick={e => {
                      // Preceeding the action
                      children.props.onClick(e)

                      // Restore state
                      setOpened(false)
                      setUnsavedChanges(false)
                    }}
                  >
                    Продовжити
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        // When there are no changes, then simply renders a child component
        <>{children}</>
      )}
    </>
  )
}
