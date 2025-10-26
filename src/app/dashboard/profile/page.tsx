import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil</CardTitle>
        <CardDescription>
          Informasi profil Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <p>
            <strong>Nama:</strong> {session?.user?.name}
          </p>
          <p>
            <strong>Email:</strong> {session?.user?.email}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
