import { createClient } from '@supabase/supabase-js'

// URL твоего проекта (посмотри в настройках Supabase)
const supabaseUrl = 'https://rerelevmuqjcqqficefc.supabase.co'

// Твой publishable ключ
const supabaseAnonKey = 'sb_publishable_hj2BuFZFuePXubmxHDSALQ_8vsEeL0z'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)