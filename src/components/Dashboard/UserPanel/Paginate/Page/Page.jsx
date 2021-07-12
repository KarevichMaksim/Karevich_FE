import classNames from "classnames/bind";

export function Page({page,onPaginateClick,activePage}) {
    const active = classNames('paginate__page', {'active': activePage === page})

    return (
        <span onClick={()=>onPaginateClick(page)} className={active}>{page}</span>
    )
}