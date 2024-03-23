import Home from '@/components/home/home'
import { DefaultLayout } from '@/components/layout/defaultLayout'
import React from 'react'

export default function index() {
    return (
        <DefaultLayout>
            <Home />
        </DefaultLayout>
    )
}
