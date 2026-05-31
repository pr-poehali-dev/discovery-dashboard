import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''
    Business: Приём заявок из анкеты определения психотипа (архетипа путешественника).
    Args: event с httpMethod, body (name, contact, archetype, energy, temper)
    Returns: HTTP-ответ со статусом сохранения заявки
    '''
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    contact = (body.get('contact') or '').strip()
    archetype = (body.get('archetype') or '').strip()
    energy = (body.get('energy') or '').strip()
    temper = (body.get('temper') or '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Имя и контакт обязательны'}),
        }

    name_esc = name.replace("'", "''")[:200]
    contact_esc = contact.replace("'", "''")[:300]
    archetype_esc = archetype.replace("'", "''")[:100]
    energy_esc = energy.replace("'", "''")[:20]
    temper_esc = temper.replace("'", "''")[:20]

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "CREATE TABLE IF NOT EXISTS quiz_leads ("
        "id SERIAL PRIMARY KEY, "
        "name VARCHAR(200) NOT NULL, "
        "contact VARCHAR(300) NOT NULL, "
        "archetype VARCHAR(100) NOT NULL, "
        "energy VARCHAR(20), "
        "temper VARCHAR(20), "
        "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    )
    conn.commit()
    cur.execute(
        "INSERT INTO quiz_leads (name, contact, archetype, energy, temper) "
        f"VALUES ('{name_esc}', '{contact_esc}', '{archetype_esc}', '{energy_esc}', '{temper_esc}') RETURNING id"
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'id': lead_id}),
    }