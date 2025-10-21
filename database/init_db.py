# import sqlite3 as sl

# connection = sl.connect('database.db')

# with open('schema.sql') as f:
#     connection.executescript(f.read())
    
# cur = connection.cursor()

# cur.execute("INSERT INTO events (event_name, event_description) VALUES (?, ?)",
#             ('Test Event 1', 'ESN 2025/2026 1')
#             )

# cur.execute("INSERT INTO events (event_name, event_description) VALUES (?, ?)",
#             ('Test Event 2', 'ESN 2025/2026 2')
#             )

# connection.commit()
# connection.close()