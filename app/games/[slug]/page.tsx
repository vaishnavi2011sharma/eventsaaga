import { notFound } from "next/navigation";
import { getGameBySlug, ALL_GAMES } from "@/lib/gamesData";
import GameDetailPage from "@/components/game-detail/Gamedetailpage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_GAMES.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return { title: "Game Not Found" };
  }

  return {
    title: `${game.name} | EventSaaga`,
    description: game.description,
  };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;

  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return <GameDetailPage game={game} />;
}