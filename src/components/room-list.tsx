import { useQuery } from '@tanstack/react-query'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GetRoomsAPIesponde } from '@/http/types/get-rooms-response'
import { dayjs } from '@/lib/dayjs'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIesponde = await response.json()

      return result
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas Recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentementes
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}
        {data?.map((room) => {
          return (
            <Link
              className="rouded-lg flex items-center justify-between rounded border p-3 hover:bg-accent/50"
              key={room.id}
              to={`/rooms/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}
