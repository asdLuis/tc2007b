package com.example.unittest

import junit.framework.TestCase.assertEquals
import junit.framework.TestCase.assertTrue
import org.junit.Test

class UserTest {
    @Test
    fun testIsAdult() {
        val user = User("Luis", 12)
        assertTrue(user.isAdult())
    }

    @Test
    fun testIsTeenager() {
        val user = User("Luis", 19)
        assertTrue(user.isTeenager())
    }

    @Test
    fun testIsChild() {
        val user = User("Luis", 0)
        assertTrue(user.isChild())
    }
    @Test
    fun testGetName(){
        val user = User("Luis", 0)
        assertEquals("Luis", user.name)
    }
}