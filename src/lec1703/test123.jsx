import ArticaleList from "./article_list"; // work as view
import AddArticale from "./add_Articles";  // work as view
import MyFeature from "./myfeaters";  // work as conroller

export default function MyExtraFunction(){
    return( <>
        <MyFeature addarticle={({ title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd}) => (
    <AddArticale
            title={ title }
            summary={ summary }
            onChangeTitle={ onChangeTitle }
            onChangeSummary={ onChangeSummary }
            onClickAdd={ onClickAdd }
    />
        )}

        articlelist={ ({article,onClickToggle,onClickRemove}) => (
            <ArticaleList
            article={article}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
            />
        )}
/>
    </>
    );
}