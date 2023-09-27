<script>
	import { Skeleton, ListPlaceholder } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	// TODO: 데이터 연동
	let isDataReady = true;

	// 받은 데이터
	export let data;
</script>

<div class="items-center justify-center">
	<div class="container">
		<!-- 좌측 -->
		<div class="flex-wrap w-4/12 h-5">
			{#each data.data as hero}
				<div class="flex-col w-24 h-24 border justify-center items-center">
					<img
						class="w-12 h-12 object-cover"
						src="img/heroes/{hero.real_name}.png"
						alt={hero.localized_name_kor}
					/>
					<span class="text-xs mt-1">{hero.localized_name_kor}</span>
				</div>
			{/each}
		</div>

		<div class="w-8/12">
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell>순번</TableHeadCell>
					<TableHeadCell>영웅</TableHeadCell>
					<TableHeadCell>티어</TableHeadCell>
					<TableHeadCell>승률</TableHeadCell>
					<TableHeadCell>픽률</TableHeadCell>
					<TableHeadCell>밴률</TableHeadCell>
					<TableHeadCell>상대하기 어려운 영웅</TableHeadCell>
				</TableHead>
				<!-- 데이터 표시 영역 -->
				<TableBody class="divide-y">
					{#if isDataReady == false}
						<TableBodyRow>
							<TableBodyCell colspan="7">
								<ListPlaceholder class="min-w-full" />
								<!-- <Skeleton size="xxl" class="my-8" /> -->
							</TableBodyCell>
						</TableBodyRow>
					{:else}
						{#each data.data as hero, i}
							<TableBodyRow>
								<TableBodyCell>{i}</TableBodyCell>
								<TableBodyCell>
									<div class="flex-wrap items-center">
										<img
											class="w-8 h-8 object-cover"
											src="img/heroes/{hero.real_name}.png"
											alt={hero.localized_name_kor}
										/>
										<span class="ml-2">
											{hero.localized_name_kor}
										</span>
									</div></TableBodyCell
								>
								<TableBodyCell>ㅁ</TableBodyCell>
								<TableBodyCell>50.0%</TableBodyCell>
								<TableBodyCell>50.0%</TableBodyCell>
								<TableBodyCell>50.0%</TableBodyCell>
								<TableBodyCell>ㅁ ㅁ ㅁ</TableBodyCell>
							</TableBodyRow>
						{/each}
					{/if}
				</TableBody>
			</Table>
		</div>
	</div>
</div>

<style>
	div {
		display: flex;
	}
</style>
